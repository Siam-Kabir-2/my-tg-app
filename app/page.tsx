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
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem maiores sequi, commodi ut, nobis mollitia ipsa quae ratione corrupti et laudantium sit accusamus consectetur? Autem suscipit asperiores quod vitae quia?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem, aperiam, accusamus debitis neque accusantium eveniet beatae at soluta, ea obcaecati amet minima animi laudantium rerum officia? Magni, velit eos?
      Cupiditate distinctio repudiandae, ad voluptatem laudantium maiores odit! Nemo ratione deleniti qui voluptates labore error rem. Iure molestias at placeat labore nisi dolore voluptatem obcaecati, ratione numquam. Quo, quis aspernatur?
      Reprehenderit aperiam ipsam ad atque ut iusto molestiae voluptate repellendus doloribus corporis, ab voluptatibus qui illum sapiente nesciunt dignissimos enim officia beatae, quaerat dolorem et delectus rerum illo perferendis. Eius?
      Voluptatum molestias pariatur doloribus vitae! Culpa voluptate eveniet repellendus. Id pariatur ea error nobis cupiditate quisquam dignissimos harum earum labore nesciunt molestiae, voluptatum quibusdam, reiciendis soluta? Itaque quia facilis in!
      Velit distinctio odio doloremque omnis iure nihil quasi debitis voluptate modi. Illo similique ducimus, fugit obcaecati illum rem error architecto? Maxime expedita vel nobis hic adipisci asperiores voluptas tenetur harum!
      Mollitia porro perspiciatis saepe nesciunt ratione incidunt natus deserunt corrupti distinctio necessitatibus tenetur modi, consectetur earum dolores magni? Odio quas rem perspiciatis iure labore molestias ex. Porro optio repudiandae ut.
      Quam, eos ea ipsum rerum accusamus molestiae numquam dicta tempora, dolores blanditiis laudantium ut quisquam omnis laborum deserunt repellendus. Consectetur ducimus, eius quae natus maxime harum totam sunt ex perspiciatis?
      Atque magni quaerat aut soluta architecto amet qui animi culpa. Sint quis aut maiores eaque iste commodi minima ducimus et, magni illo modi voluptas impedit quam earum provident laudantium a.
      Praesentium expedita illum sunt dolorum velit, error vero veniam repellat, ad modi fugit quas molestias odio porro beatae. Repellat excepturi omnis officia assumenda ad labore perspiciatis tempore nesciunt, soluta itaque!
      Ullam illum, officia aliquam reprehenderit recusandae nulla odit placeat, iusto exercitationem id officiis, error nemo obcaecati rerum nam! Impedit pariatur recusandae dolor eveniet eum suscipit quaerat cumque esse quis velit!</p>
    </main>
  );
}