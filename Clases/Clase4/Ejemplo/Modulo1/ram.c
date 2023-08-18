#include <linux/module.h>
// para usar KERN_INFO
#include <linux/kernel.h>
//Header para los macros module_init y module_exit
#include <linux/init.h>
//Header necesario porque se usara proc_fs
#include <linux/proc_fs.h>
/* for copy_from_user */
#include <asm/uaccess.h>	
/* Header para usar la lib seq_file y manejar el archivo en /proc*/
#include <linux/seq_file.h>

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Ejemplo creacion de modulo en Linux, Laboratorio Sistemas Operativos 1");
MODULE_AUTHOR("Jhonathan Tocay");


static int escribir_archivo(struct seq_file *archivo, void *v)
{
    int total_ram = 200000;
    int ram_porcentaje= 20;
    seq_printf(archivo, "{\n\"ram_total\":%d,\n", total_ram);
    seq_printf(archivo, "\"ram_porcentaje\":%d\n", ram_porcentaje);
    seq_printf(archivo, "\"}\n");
    return 0;
}

//Funcion que se ejecuta cuando se le hace un cat al modulo.
static int al_abrir(struct inode *inode, struct file *file)
{
    return single_open(file, escribir_archivo, NULL);
}

// Si el su Kernel es 5.6 o mayor
static struct proc_ops operaciones =
{
    .proc_open = al_abrir,
    .proc_read = seq_read
};

static int _insert(void)
{
    proc_create("ram", 0, NULL, &operaciones);
    printk(KERN_INFO "Insertar Modulo Ram\n");
    return 0;
}

static void _remove(void)
{
    remove_proc_entry("ram", NULL);
    printk(KERN_INFO "Remover Modulo Ram\n");
}

module_init(_insert);
module_exit(_remove);