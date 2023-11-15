import { createClient, type ClientConfig } from "@sanity/client";
import { projectId, dataset, apiVersion, useCdn, token } from "./env.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  ignoreBrowserTokenWarning: true,
};
const client = createClient(config);

export default client;
