import { Box, Typography, TextField, Button, Checkbox } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useCartStore } from "../store/cart-store";
import { useAddressState } from "../hooks/useAddressState";
import type { FormValues } from "../types/checkout";
import { submitCheckoutForm } from "../http/http";
import ErrorText from "./ErrorText";
import AddressFields from "./AddressFields";
import { countriesStates } from "../constants/variables-constants";

export default function DeliveryForm() {
  const { cart } = useCartStore();

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      billingSameAsShipping: false,
      shipping: { country: "Canada", state: countriesStates["Canada"][0] },
      billing: { country: "Canada", state: countriesStates["Canada"][0] },
    },
  });

  const shipping = useAddressState();
  const billing = useAddressState();

  const { mutate } = useMutation({
    mutationFn: submitCheckoutForm,
    onSuccess: (data) => {
      window.location.href = data;
    },
  });

  return (
    <Box
      sx={{
        border: "1px solid white",
        width: "80%",
        padding: "1.5rem",
      }}
    >
      <Typography>Delivery Information</Typography>
      <form
        onSubmit={handleSubmit((formData) => mutate({ formData, cart }))}
        noValidate
        style={{
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
        }}
      >
        <Box>
          <TextField
            placeholder="Email"
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
          <Checkbox
            sx={{
              color: "#fff",
              "&.Mui-checked": {
                color: "#fff",
              },
            }}
            {...register("billingSameAsShipping", {
              onChange: (e) => setBillingSameAsShipping(e.target.checked),
            })}
          />
          <Typography>Billing address is the same as shipping</Typography>
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

        <Button
          disableRipple
          disableElevation
          variant="contained"
          type="submit"
          sx={{ width: "100%", mt: "1rem" }}
        >
          Submit And Checkout
        </Button>
      </form>
    </Box>
  );
}
