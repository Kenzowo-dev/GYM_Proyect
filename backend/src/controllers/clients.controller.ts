import type { Request, Response } from "express";
import { getAllClients, getClientById, createClient} from "../services/clients.service.js";


//Controlador de la ruta GET /api/clients

export async function getClients(_req: Request, res: Response) {
  try {
    const clients = await getAllClients();

    res.json(clients);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al obtener los clientes",
    });
  }
}


// Controlador de la ruta GET /api/clients/:id

export async function getClientByIdController(
  req: Request<{id: string}>,
  res: Response
) {
  try {
    const id = Number(req.params.id);
// Validar que el ID sea un número entero positivo
    if (!Number.isInteger(id)|| id <= 0){
      return res.status(400).json({
        message: "El ID del cliente debe ser un número entero positivo",
      });
    }

    const client = await getClientById(id);

    if (!client) {
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    }

    res.json(client);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al obtener el cliente",
    });
  }
}

// Controlador de la ruta POST /api/clients

export async function createClientController(
  req: Request,
  res: Response
) {
  try {

    // Validar que los campos obligatorios estén presentes
    const client = await createClient(req.body); 
    //
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    // Validar si el error es un error de violación de restricción de unicidad (código 23505)
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {
      return res.status(409).json({
        message: "Ya existe un cliente con ese DNI o correo electrónico",
      });
    }

    res.status(500).json({
      message: "Error al registrar el cliente",
    });
  }
}