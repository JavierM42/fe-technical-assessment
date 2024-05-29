export type Tag = { name: string; color: string };

export type Workflow = {
  type: "workflow" | "agent";
  name: string;
  tags: Tag[];
};
