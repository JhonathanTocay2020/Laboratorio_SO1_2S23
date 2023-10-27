import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tabla.css';

const UsuariosTabla = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://34.86.13.227:3300/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Carnet</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.carnet}</td>
              <td>{usuario.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTabla;
