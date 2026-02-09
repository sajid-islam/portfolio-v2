const SkillGroup = ({ title, items }) => (
    <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3 bg-gray-100 rounded-md py-0.5 px-2 border">
            {title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
            {items.map((skill, idx) => (
                <span
                    key={idx}
                    className="text-[12px] font-semibold flex items-center gap-1 
          bg-[#f5f5f5] dark:bg-[#262626] rounded-full px-[10px] py-1"
                >
                    {skill.icon}
                    {skill.name}
                </span>
            ))}
        </div>
    </div>
);

export default SkillGroup;
