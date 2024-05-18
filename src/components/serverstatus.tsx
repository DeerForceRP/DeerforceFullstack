import Status from "./status";

export default function ServerStatus() {
  return (
    <section className="px-0 py-24">
      <div className="container mx-auto sm:px-4">
        <div className="text-center">
          <h2 className="mb-4 mt-0 text-4xl uppercase">Server Status</h2>
          <h3 className="mb-16 text-base font-normal italic">
            Status på serveren
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap content-center justify-center gap-4 text-center">
        <Status game="fivem" server="main" />
        <Status game="fivem" server="dev" />
        <Status game="fivem" server="event" />
      </div>
    </section>
  );
}
