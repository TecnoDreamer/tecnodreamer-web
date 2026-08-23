"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  contactFormSchema,
  PRODUCT_INTEREST_OPTIONS,
  type ContactFormValues,
} from "@/schemas/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

const labelClasses = "text-sm font-medium text-foreground";

type SubmitState = { status: "idle" } | { status: "success" } | { status: "error"; message: string };

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitState({ status: "idle" });

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 429) {
        setSubmitState({
          status: "error",
          message: "Muitas tentativas em pouco tempo. Aguarde alguns instantes e tente novamente.",
        });
        return;
      }

      if (!response.ok) {
        setSubmitState({
          status: "error",
          message: "Não foi possível enviar sua mensagem. Verifique os dados e tente novamente.",
        });
        return;
      }

      setSubmitState({ status: "success" });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message: "Falha de conexão. Verifique sua internet e tente novamente.",
      });
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div role="status" aria-live="polite">
        {submitState.status === "success" && (
          <p className="rounded-md bg-success/10 px-4 py-3 text-sm text-success">
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </p>
        )}
        {submitState.status === "error" && (
          <p className="rounded-md bg-error/10 px-4 py-3 text-sm text-error">
            {submitState.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClasses}>
            Nome *
          </label>
          <input
            id="name"
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-error">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClasses}>
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-error">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className={labelClasses}>
            Empresa
          </label>
          <input id="company" className={inputClasses} {...register("company")} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClasses}>
            Telefone
          </label>
          <input
            id="phone"
            className={inputClasses}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-error">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className={labelClasses}>
            Assunto *
          </label>
          <input
            id="subject"
            className={inputClasses}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs text-error">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="productInterest" className={labelClasses}>
            Produto de interesse *
          </label>
          <select
            id="productInterest"
            className={inputClasses}
            defaultValue=""
            aria-invalid={Boolean(errors.productInterest)}
            aria-describedby={errors.productInterest ? "productInterest-error" : undefined}
            {...register("productInterest")}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {PRODUCT_INTEREST_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.productInterest && (
            <p id="productInterest-error" className="text-xs text-error">
              {errors.productInterest.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClasses}>
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-2 text-sm text-foreground-muted">
          <input
            type="checkbox"
            className="mt-0.5"
            aria-invalid={Boolean(errors.privacyConsent)}
            aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined}
            {...register("privacyConsent")}
          />
          <span>
            Li e concordo com a{" "}
            <Link href="/privacidade" className="text-brand-primary-strong hover:underline">
              Política de Privacidade
            </Link>
            . *
          </span>
        </label>
        {errors.privacyConsent && (
          <p id="privacyConsent-error" className="text-xs text-error">
            {errors.privacyConsent.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className={cn(isSubmitting && "opacity-70")}>
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}
