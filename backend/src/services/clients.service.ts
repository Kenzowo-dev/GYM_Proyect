import { pool } from "../db/connection.js";

//Funcion para obtener todos los clientes
export async function getAllClients() {
  const result = await pool.query(`
    SELECT
      id,
      dni,
      first_name,
      last_name,
      email,
      phone,
      birth_date,
      created_at,
      updated_at
    FROM clients
    ORDER BY id ASC
  `);

  return result.rows;
}

//Funcion para obtener clientes por id

export async function getClientById(id: number) {
  const result = await pool.query(
    `
      SELECT
        id,
        dni,
        first_name,
        last_name,
        email,
        phone,
        birth_date,
        created_at,
        updated_at
      FROM clients
      WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
}

//Interface del cliente para el POST

interface CreateClientData {
  dni: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  birthDate?: string;
}

//Funcion para crear un clente

export async function createClient(data: CreateClientData) {
  const result = await pool.query(
    `
      INSERT INTO clients (
        dni,
        first_name,
        last_name,
        email,
        phone,
        birth_date
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING
        id,
        dni,
        first_name,
        last_name,
        email,
        phone,
        birth_date,
        created_at,
        updated_at
    `,
    [
      data.dni,
      data.firstName,
      data.lastName,
      data.email ?? null,
      data.phone ?? null,
      data.birthDate ?? null,
    ]
  );

  return result.rows[0];
}