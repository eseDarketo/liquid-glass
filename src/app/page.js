import { Row, Column, Grid, Card, Button, Heading, Scroller } from "@once-ui-system/core";
import GlassCard from "@/components/GlassCard";

const cards = (amount) => {
  // for each in amount, create a card
  return (
    <Column fillWidth gap="32" horizontal="end" vertical="end">
      {Array.from({ length: amount }).map((_, index) => (
        <Card key={index} maxWidth={24} radius="l-4" direction="column" border="neutral-alpha-medium" style={{ overflow: 'hidden' }} fillWidth fillHeight>
          <Column style={{ overflow: 'hidden', minHeight: '10rem' }} fillWidth radius="xs" vertical="center" horizontal="center">
            <GlassCard>
              <Heading variant="heading-strong-xl" as="h2">
                Some say we walk alone<br />
                Barefoot on wicked stone, no light<br />
                And sactuary found never waits around awhile<br /><br />
              </Heading>
            </GlassCard>
          </Column>
          <Column fillWidth paddingX="12" paddingY="24" gap="8" href="/sea">
            <Heading as="h3" href="/sea" className="ml-16">Hover the hello</Heading>
            <Button href="/sea" variant="tertiary">
              Bits and pieces
            </Button>
          </Column>
        </Card>
      ))}
    </Column>
  )
}

export default function Home() {
  return (
    <Row>
      <Scroller
        fillWidth
        size="100%"
        direction="column"
        fadeColor="transparent"
        style={{ overflow: 'hidden', maxWidth: '100%', }}
      >
        {cards(10)}
      </Scroller>
      <Column fillWidth gap="32"></Column>
    </Row>
  );
}
