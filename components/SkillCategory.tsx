import { SkillLevel } from "@/lib/constants"
import React from "react"

interface SkillCategoryProps {
  categoryName: string
  skills: Skill[]
}

interface Skill {
  name: string
  level: SkillLevel
}

interface SkillLevelOptions {
  text: string
  color: string
  width: string
}

const skillLevelOptions: Record<SkillLevel, SkillLevelOptions> = {
  [SkillLevel.Advanced]: {
    text: "Advanced",
    color: "bg-brutalist-primary",
    width: "90%",
  },
  [SkillLevel.Intermediate]: {
    text: "Intermediate",
    color: "bg-brutalist-accent",
    width: "60%",
  },
  [SkillLevel.Basic]: {
    text: "Basic",
    color: "bg-brutalist-secondary",
    width: "30%",
  },
}

const getLevelColor = (level: SkillLevel) => {
  const { color } = skillLevelOptions[level]
  return color
}

const getLevelWidth = (level: SkillLevel) => {
  const { width } = skillLevelOptions[level]
  return width
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  categoryName,
  skills,
}) => {
  return (
    <div className="mb-8 p-6 border-3 border-brutalist-border shadow-brutalist">
      <h3 className="text-2xl font-bold mb-6 text-brutalist-foreground">
        {categoryName}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <span className="text-md font-medium text-brutalist-foreground mb-1 md:mb-0 md:mr-4 flex-shrink min-w-0 break-words">
              {skill.name}
            </span>
            <div className="flex items-center w-full md:w-auto md:flex-shrink-0">
              <span
                className={`text-xs font-semibold px-2 py-1 mr-2 ${getLevelColor(skill.level)} text-white border-2 border-brutalist-border shadow-brutalist-sm min-w-[100px] text-center`}
              >
                {skill.level}
              </span>
              <div className="flex-grow md:flex-grow-0 md:w-32 h-4 bg-gray-300 border-2 border-brutalist-border relative">
                <div
                  className={`h-full ${getLevelColor(skill.level)}`}
                  style={{
                    width: getLevelWidth(skill.level),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
