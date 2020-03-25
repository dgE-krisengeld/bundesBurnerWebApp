import React from "react";
import PageContainer from "./page-container";
import {
  TextField,
  Select,
  MenuItem,
  Icon,
  ListItemIcon,
  InputLabel,
  FormControl
} from "@material-ui/core";
import styled from "styled-components";
import ActionButton from "./action-button";
import { Link } from "react-router-dom";

const businessTypes = [
  {
    name: "Restaurant",
    icon: "local_dining"
  },
  {
    name: "Pizzeria",
    icon: "local_pizza"
  },
  {
    name: "Imbiss & Fast food",
    icon: "fastfood"
  },
  {
    name: "Café",
    icon: "local_cafe"
  },
  {
    name: "Bar",
    icon: "local_bar"
  },
  {
    name: "Blumengeschäft",
    icon: "local_florist"
  },
  {
    name: "Kino",
    icon: "local_movies"
  },
  {
    name: "Theater",
    icon: "local_play"
  },
  {
    name: "Buchladen",
    icon: "local_library"
  }
];

export const Register = () => {
  return (
    <PageContainer>
      <h1>Als Geschäft registrieren</h1>
      <Form>
        <Row>
          <Field>
            <TextField
              id="business-name"
              label="Name des Geschäfts"
              fullWidth
            />
          </Field>
        </Row>
        <Row>
          <Field>
            <InputLabel id="business-type-label">Art des Geschäfts</InputLabel>
            <Select id="business-type" labelId="business-type-label">
              {businessTypes.map(({ icon, name }) => (
                <MenuItem value={name}>
                  <ListItemIcon>
                    {" "}
                    <Icon>{icon}</Icon>
                  </ListItemIcon>
                  <span>{name}</span>
                </MenuItem>
              ))}
            </Select>
          </Field>
        </Row>
        <Row>
          <StreetField>
            <TextField
              id="business-street"
              label="Straße & Hausnr."
              fullWidth
            />
          </StreetField>
          <Field>
            <TextField id="business-postal" label="Postleitzahl" fullWidth />
          </Field>
          <Field>
            <TextField id="business-city" label="Ort" fullWidth />
          </Field>
        </Row>
        <Row>
          <Field>
            <TextField id="business-taxid" label="Steuer-ID" fullWidth />
          </Field>
        </Row>
        <Row>
          <span></span>
          <ActionButton component={Link} to="/business/dashboard">
            Registrierung abschließen
          </ActionButton>
          <span></span>
        </Row>
      </Form>
    </PageContainer>
  );
};

const Form = styled.form`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px -10px;
`;

const Field = styled(FormControl)`
  flex-grow: 1;
  margin: 0 10px !important;
`;

const StreetField = styled(Field)`
  width: 100%;
  @media (min-width: 750px) {
    width: inherit;
  }
`;
