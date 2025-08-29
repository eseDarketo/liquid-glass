import {Column, Heading} from "@once-ui-system/core";

export default function Typography() {
  return (
      <Column fillWidth fillHeight vertical="center" horizontal="center" gap="24">
        <Heading as="h1">Typography</Heading>
        <Heading as="h2">Typography</Heading>
        <Heading as="h3">Typography</Heading>
        <Heading as="h4">Typography</Heading>
        <Heading as="h5">Typography</Heading>
        <Heading as="h6">Typography</Heading>
      </Column>
  );
}