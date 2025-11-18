import RingSkill from "./RingSkill";

export default function Skils() {
  return (
    <section
      id="skils"
      aria-label="Skils"
      className="max-w-7xl   mx-auto p-6 space-y-16"
    >
      <div className="grid grid-cols-4 gap-4">
        <RingSkill
          skill="Web Design"
          targetPercentage={96}
          color="text-emerald-400"
        />
        <RingSkill
          skill="UI Branding"
          targetPercentage={98}
          color="text-blue-400"
        />
        <RingSkill
          skill="Meta Ads"
          targetPercentage={92}
          color="text-purple-400"
        />
        <RingSkill
          skill="Creatives"
          targetPercentage={88}
          color="text-pink-400"
        />
      </div>
    </section>
  );
}
