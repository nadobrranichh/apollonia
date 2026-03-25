import { Controller } from "react-hook-form";
import { countriesStates } from "../constants/variables-constants";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import ErrorText from "./ErrorText";

type AddressFieldsProps = {
  value: "billing" | "shipping";
  control: any;
  register: any;
  errors: any;
  disabled?: boolean;
  selectedCountry: keyof typeof countriesStates;
  selectedState: string;
  onCountryChange: (country: keyof typeof countriesStates) => void;
  onStateChange: (state: string) => void;
};

export default function AddressFields({
  value,
  control,
  register,
  errors,
  disabled,
  selectedCountry,
  selectedState,
  onCountryChange,
  onStateChange,
}: AddressFieldsProps) {
  const required = (message: string) => ({
    required: { value: !disabled, message },
  });

  return (
    <>
      <Typography sx={{ textTransform: "uppercase" }}>
        {value} address information
      </Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <Box>
          <TextField
            placeholder="First Name"
            {...register(
              `${value}.firstName`,
              required("First name is required"),
            )}
            sx={{ width: "100%" }}
          />
          {errors?.[value]?.firstName && (
            <ErrorText>{errors[value].firstName.message}</ErrorText>
          )}
        </Box>

        <Box>
          <TextField
            placeholder="Last Name"
            {...register(
              `${value}.lastName`,
              required("Last name is required"),
            )}
            sx={{ width: "100%" }}
          />
          {errors?.[value]?.lastName && (
            <ErrorText>{errors[value].lastName.message}</ErrorText>
          )}
        </Box>
      </Box>

      <Box>
        <TextField
          placeholder="Address 1"
          {...register(`${value}.address1`, required("Address is required"))}
          sx={{ width: "100%" }}
        />
        {errors?.[value]?.address1 && (
          <ErrorText>{errors[value].address1.message}</ErrorText>
        )}
      </Box>
      <TextField placeholder="Address 2" {...register(`${value}.address2`)} />

      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <Controller
          name={`${value}.country`}
          control={control}
          rules={required("Country is required")}
          render={({ field }) => (
            <Select
              {...field}
              value={selectedCountry}
              onChange={(e) => {
                const country = e.target.value as keyof typeof countriesStates;
                onCountryChange(country);
                field.onChange(e);
              }}
            >
              {Object.keys(countriesStates).map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        <Controller
          name={`${value}.state`}
          control={control}
          rules={required("State is required")}
          render={({ field }) => (
            <Select
              {...field}
              value={selectedState}
              onChange={(e) => {
                onStateChange(e.target.value);
                field.onChange(e);
              }}
            >
              {countriesStates[selectedCountry].map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </Box>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <Box>
          <TextField
            placeholder="Postal Code"
            {...register(
              `${value}.postalCode`,
              required("Postal code is required"),
            )}
            sx={{ width: "100%" }}
          />
          {errors?.[value]?.postalCode && (
            <ErrorText>{errors[value].postalCode.message}</ErrorText>
          )}
        </Box>

        <Box>
          <TextField
            placeholder="City"
            {...register(`${value}.city`, required("City is required"))}
            sx={{ width: "100%" }}
          />
          {errors?.[value]?.city && (
            <ErrorText>{errors[value].city.message}</ErrorText>
          )}
        </Box>
      </Box>
      <TextField
        placeholder="Phone Number"
        {...register(
          `${value}.phoneNumber`,
          required("Phone number is required"),
        )}
      />
    </>
  );
}
