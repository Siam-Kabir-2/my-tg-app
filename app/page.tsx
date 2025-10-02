"use client";

import { useTelegram } from "@/hooks/useTelegram";

export default function HomePage() {
  const { webApp, user, loading, error } = useTelegram();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error)
    return (
      <div className="p-4 space-y-4">
        <div>{error}</div>
        <div className="text-sm opacity-70">
          Tip: Open the bot link inside Telegram to see real user data.
        </div>
      </div>
    );

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Mini App Starter</h1>
      {user ? (
        <div className="space-y-2">
          <p>
            Hello {user.first_name} {user.last_name || ""} (@{user.username || "no-username"})
          </p>
          <p>User ID: {user.id}</p>
          <p>Language: {user.language_code || "?"}</p>
          {user.is_premium && <p>Premium ✅</p>}
        </div>
      ) : (
        <p>No user data (debug mode or not inside Telegram).</p>
      )}
      <section className="space-y-2">
        <h2 className="font-medium">App State</h2>
        <p>Color scheme: {webApp?.colorScheme}</p>
        <button
          className="px-4 py-2 rounded bg-indigo-600"
          onClick={() => webApp?.showAlert("Hello from Mini App")}
        >
          Show Telegram Alert
        </button>
      </section>
      <p>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat, odit exercitationem et explicabo corporis ratione nemo autem molestiae ab nihil sed tenetur porro quaerat, in commodi, mollitia amet quisquam.</div>
        <div>Voluptatibus nihil quaerat magnam quidem repellat perferendis aspernatur maiores soluta ratione nemo sit, placeat voluptates facilis reiciendis ipsum excepturi harum et, tempore ad unde consectetur veniam consequatur. Libero, consequatur illo!</div>
        <div>Aliquid nihil rerum quae, eaque quas, voluptate deserunt modi perspiciatis pariatur repellat amet tenetur? Error quis libero ipsam adipisci sit tempora dicta dolorem repellat? Esse harum dignissimos vel. Pariatur, corrupti?</div>
        <div>Eos ipsam explicabo numquam doloremque, neque in excepturi corporis enim recusandae eveniet quam dignissimos! Excepturi nulla, exercitationem porro quo in nam sequi necessitatibus vel amet quam unde facere? Corrupti, iure.</div>
        <div>Beatae tenetur quidem, molestiae molestias fuga qui, architecto modi quod nobis, cumque quos itaque nulla doloribus recusandae corporis harum soluta quas placeat. Modi dolore veniam, nobis qui perferendis voluptatum necessitatibus?</div>
        <div>Fugit quos commodi sed ea iure itaque consectetur aspernatur, enim facere, reiciendis cumque doloribus recusandae sunt quae dolor voluptatem eaque quasi. Facere quibusdam aspernatur veniam fugiat commodi odio, accusamus ipsa.</div>
        <div>Iusto quibusdam deleniti necessitatibus? Qui placeat nostrum expedita blanditiis minus error reiciendis quis quos rerum ad natus veritatis quasi neque atque esse aut, iusto at. Voluptas eaque rem eos id!</div>
        <div>A quia est aliquid fuga quidem, nam aperiam enim sit autem! Ipsa officiis minima quaerat totam, nam illo in atque vero doloribus inventore praesentium reprehenderit aut ipsum quod fuga libero.</div>
        <div>Voluptatum autem odio, assumenda quis excepturi velit perspiciatis fugit eaque id totam maiores dolorem doloremque sit vel unde, cum blanditiis nihil culpa. Molestiae qui veniam similique suscipit nisi mollitia aperiam!</div>
        <div>Corporis similique ea molestias, et deserunt asperiores quidem non ratione officiis animi voluptatibus vel qui porro impedit ipsam, hic quaerat illum tempore natus. Ab, iure laborum consequatur enim voluptatem quaerat?</div>
      </p>
    </main>
  );
}