"use server";

import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const variables = {
    input: {
      ...formDataObject,
      phone: "+57" + formDataObject.phone,
    },
  };

  const { customerCreate } = await graphqlClient.request(
    createUserMutation,
    variables
  );

  const { customerUserErrors, customer } = customerCreate;

  console.log("customerUserErrors", customerUserErrors);

  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );

    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);

  const accessToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );

  if (accessToken) {
    redirect("/store");
  }
};
