import {Card, CardGrid, Group, Header, Link} from "@vkontakte/vkui";
import {Icon24Add} from "@vkontakte/icons";
import {Chart} from "./chart";

type TStatsCard = {
  label: string;
  fieldName: string
}

export const StatsCard = ({label, fieldName} : TStatsCard) => {
  const data = {
    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [36, 36.6, 36.7, 37.5, 37.8, 37.2, 37.5],
      }
    ],
  };
  return (
    <CardGrid size={"s"}>
      <Card>
        <Group>
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
          <Chart data={data}/>
        </Group>
      </Card>
    </CardGrid>
  );
}