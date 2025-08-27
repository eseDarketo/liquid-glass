import { Row, Column, Grid, Card, Button, Heading } from "@once-ui-system/core";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <Grid fillWidth className={'py-160 px-160'} columns="3" gap="32">
      <Card maxWidth={24} radius="l-4" direction="column" border="neutral-alpha-medium" style={{overflow: 'hidden'}}>
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
          <Heading as="h3" href="/sea" className="ml-16">Drag the image</Heading>
          <Button href="/sea" variant="tertiary">
            Click here to see the sea
          </Button>
        </Column>
      </Card>
      <Card maxWidth={24} radius="l-4" direction="column" border="neutral-alpha-medium" style={{overflow: 'hidden'}}>
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
    </Grid>
  );
}
