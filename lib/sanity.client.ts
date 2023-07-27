import { createClient, type ClientConfig } from "@sanity/client";
import { projectId, dataset, apiVersion, useCdn, token } from "./sanity.api";

const config: ClientConfig = { projectId, dataset, apiVersion, useCdn, token };
const client = createClient(config);

export default client;
