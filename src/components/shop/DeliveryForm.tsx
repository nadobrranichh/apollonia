import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  Card,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useCartStore } from "../../store/cart-store";
import { useAddressState } from "../../hooks/useAddressState";
import type { FormValues } from "../../types/checkout";
import { submitCheckoutForm } from "../../http/http";
import ErrorText from "../ErrorText";
import AddressFields from "./AddressFields";
import { countriesStates } from "../../constants/variables-constants";
import { useTranslation } from "react-i18next";
import { useEllipsis } from "../../hooks/useEllipsis";
import { descriptionStyles } from "../../styles/typographyStyles";

export default function DeliveryForm() {
  const { t } = useTranslation();
  const ellipsis = useEllipsis();
  const { cart } = useCartStore();
  const shipping = useAddressState();
  const billing = useAddressState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      billingSameAsShipping: false,
      shipping: { country: "Canada", state: countriesStates["Canada"][0] },
      billing: { country: "Canada", state: countriesStates["Canada"][0] },
    },
  });
  const billingSameAsShipping = watch("billingSameAsShipping");
  const { mutate, isPending, error } = useMutation({
    mutationFn: submitCheckoutForm,
    onSuccess: (data) => {
      window.location.href = data;
    },
  });

  return (
    <Card>
      <Typography variant="h5">{t("checkout.title")}</Typography>
      <form
        onSubmit={handleSubmit((formData) => mutate({ formData, cart }))}
        noValidate
        style={{
          paddingTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
        }}
      >
        <Box>
          <TextField
            placeholder={t("checkout.email")}
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email",
              },
            })}
            sx={{ width: "100%" }}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Box>
        <AddressFields
          value="shipping"
          control={control}
          register={register}
          errors={errors}
          selectedCountry={shipping.country}
          selectedState={shipping.state}
          onCountryChange={shipping.setCountry}
          onStateChange={shipping.setState}
        />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...register("billingSameAsShipping")} />
          <Typography sx={descriptionStyles}>
            {t("checkout.billingSameAsShipping")}
          </Typography>
        </Box>

        {!billingSameAsShipping && (
          <AddressFields
            value="billing"
            control={control}
            register={register}
            errors={errors}
            disabled={billingSameAsShipping}
            selectedCountry={billing.country}
            selectedState={billing.state}
            onCountryChange={billing.setCountry}
            onStateChange={billing.setState}
          />
        )}

        <Button variant="contained" type="submit">
          {isPending
            ? t("checkout.submitting") + ellipsis
            : t("checkout.submitAndCheckout")}
        </Button>
      </form>
      {error && (
        <Box>
          <ErrorText>An error occured! {error.message}</ErrorText>
        </Box>
      )}
    </Card>
  );
}
