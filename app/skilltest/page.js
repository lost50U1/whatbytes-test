export default function page() {
  return (
    <div>
      <h2 className="text-secondary font-semibold">Skill Test</h2>
      <div className="flex flex-row gap-4">
        {/* column 1  */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary font-semibold">Skill Test</h3>
          </div>
        </div>
        {/* column 2  */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary font-semibold">Skill Test</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
