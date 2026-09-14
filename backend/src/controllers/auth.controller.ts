import type { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";

export const register = (req: Request, res: Response) => {
  const { fullName, email, password, phone, birthDate, gender } = req.body;

  const user = registerUser({
    fullName,
    email,
    password,
    phone,
    birthDate,
    gender,
  });

  res.json(user);
};