import AirOps from "@airops/airops-js";
import { ExecuteResponse } from "@airops/airops-js/dist/ts/types";
import { useEffect, useRef, useState } from "react";

const userId = import.meta.env.VITE_USER_ID;
const workspaceId = import.meta.env.VITE_WORKSPACE_ID;
const hashedUserId = import.meta.env.VITE_HASHED_USER_ID;

const airopsInstance = AirOps.identify({ userId, workspaceId, hashedUserId });

export type Tag = { name: string; color: string };

export type Workflow = {
  type: "workflow" | "agent";
  name: string;
  tags: Tag[];
};

const useFetchWorkflows = () => {
  const [workflows, setWorkflows] = useState<Workflow[] | undefined>(undefined);

  const airopsResponseRef = useRef<ExecuteResponse>();
  useEffect(() => {
    const fetchWorkflows = async () => {
      airopsResponseRef.current = await airopsInstance.apps.execute({
        appId: "40946026-4683-45c0-bcb6-b773b9caba70",
        version: 3,
        payload: { inputs: {} },
      });

      const result = await airopsResponseRef.current.result();
      const { data } = result.output as { data: Workflow[] };
      setWorkflows(data);
    };

    fetchWorkflows();

    return () => {
      airopsResponseRef.current?.cancel();
    };
  }, [setWorkflows]);

  return workflows;
};

export default useFetchWorkflows;

// the typecast to Worfklow[] is not safe, in a production environment I'd use Zod to check
// that the types returned from the LLM are what I asked for

// Handling API errors is also necessary.

// React dev mode will fire useEffect twice, resulting in a flicker of different results
