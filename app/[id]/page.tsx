import { redirect } from "next/navigation";

export default async function CatchId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;        // Next 16: params is a Promise
  if (!id) return redirect("/");

  return redirect(`/p/${id}`);
}
