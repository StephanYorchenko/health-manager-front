import {Card, Header, Link} from "@vkontakte/vkui";
import {Icon24Add} from "@vkontakte/icons";
import {Chart} from "./chart";
import styled from "styled-components";
import {useMemo} from "react";


const CenteredDiv = styled.div`
  text-align: center;
  min-width: 350px;
  
  @media (min-width: 1024px){
    min-width: 512px
  }
`;

const MarginBot = styled(Card)`
  margin-bottom: 10px;
`;

type TStatsCard = {
  label: string;
  data: {value: number, time: string}[];
}

function formatTime(timeString: string) {
  const date = new Date(timeString);
  return date.toLocaleString();
}

export const StatsCard = ({label, data} : TStatsCard) => {
  const chartData = useMemo(() => {
    return {
      labels: data.map(i => formatTime(i.time)),
      datasets: [
        {
          label: label,
          data: data.map(i => i.value),
        }
      ],
    }
  }, [data, label]);
  return (
    <MarginBot>
      <CenteredDiv>
        <Header
          mode="primary"
          aside={
            <Link>
              <Icon24Add />
            </Link>
          }
        >
          {label}
        </Header>
        <Chart data={chartData}/>
      </CenteredDiv>
    </MarginBot>
  );
}