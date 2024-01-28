import { Card, Layout, Space } from 'antd'
const { Content } = Layout

interface CardListProps<Data> {
  readonly data: Data[]
}

function CardList<Data extends unknown>({ data }: CardListProps<Data>) {
  return (
    <Content>
      {data.map((item) => (
        <Card></Card>
      ))}
    </Content>
  )
}

export default CardList
