import { createClient, type ClientConfig } from "@sanity/client";
import { projectId, dataset, apiVersion, useCdn } from "./sanity.api";

const config: ClientConfig = { projectId, dataset, apiVersion, useCdn };
const client = createClient(config);

export default client;
