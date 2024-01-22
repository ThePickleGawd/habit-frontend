export const dynamic = "force-dynamic";

/*

NOTES

Schema for post
{
  increment: 1 // 2, -1, etc
  set: 70

}


TABLE



*/

export async function GET(
  request: Request,
  { params }: { params: { user: string; habit: string } }
) {
  const user = params.user;
  const habit = params.habit;
  const url = new URL(request.url);

  return Response.json({ user, url, habit });
}

export async function POST(
  request: Request,
  { params }: { params: { user: string; habit: string } }
) {
  const res = await request.json();

  return Response.json({ res });
}
