import { StatisticList, StatisticSection, TitleStatistic } from "./statistic_styled"

export const MarkupStatistics = ({title, stats}) => {
    return (
        <StatisticSection>
            {title.length > 0 && (<TitleStatistic>{title}</TitleStatistic>)}
        <StatisticList>
                {stats.map(({ id, label, percentage}) => (
                    <li key={id}>
                        <span>{label}</span>
                        <span>{percentage}</span>
                    </li>
               ))}
        </StatisticList>
        </StatisticSection>
    )
}


    

