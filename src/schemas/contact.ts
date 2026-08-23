import { z } from "zod";
import { PRODUCTS } from "@/constants/products";

const PRODUCT_INTEREST_VALUES = [
  ...PRODUCTS.map((product) => product.slug),
  "outro",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido.")
    .max(180),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => !value || /^[0-9()+\-.\s]{8,30}$/.test(value),
      "Informe um telefone válido."
    ),
  subject: z
    .string()
    .trim()
    .min(3, "Informe um assunto.")
    .max(150, "Assunto muito longo."),
  productInterest: z.enum(PRODUCT_INTEREST_VALUES, {
    message: "Selecione um produto de interesse.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Escreva uma mensagem com pelo menos 10 caracteres.")
    .max(4000, "Mensagem muito longa."),
  privacyConsent: z.literal(true, {
    message: "É necessário aceitar a política de privacidade.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const PRODUCT_INTEREST_OPTIONS = [
  ...PRODUCTS.map((product) => ({ value: product.slug, label: product.name })),
  { value: "outro" as const, label: "Outro assunto" },
];
