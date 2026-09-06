import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum([
    "General Inquiry",
    "Service One",
    "Service Two",
    "Service Three",
    "Other",
  ]),
  budget: z.enum([
    "Under $500",
    "$500–$2k",
    "$2k–$5k",
    "$5k+",
    "Not sure",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0, "Bot detected"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
