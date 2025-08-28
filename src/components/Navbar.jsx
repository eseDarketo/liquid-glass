'use client';

import { useState } from 'react';
import { Column, Row, Flex, ToggleButton, Logo, NavIcon } from "@once-ui-system/core";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <Row fillWidth vertical="center" horizontal="end" className={"py-24 px-40"}>
            <Flex
                paddingX="20"
                paddingY="8"
                background="surface"
                border="surface"
                radius="l"
                horizontal="between"
                vertical="center"
                style={{
                    width: '30rem',
                }}
                
            >
                <Logo wordmark={false} />
                <NavIcon
                    isActive={isActive}
                    onClick={handleClick}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isActive}
                    aria-controls="demo-nav"
                />
            </Flex>

            {isActive && (
                <Column
                    id="demo-nav"
                    padding="16"
                    background="surface"
                    border="surface"
                    radius="l"
                    marginTop="8"
                    fillWidth
                    gap="8"
                >
                    <ToggleButton fillWidth horizontal="start" size="l">
                        Home
                    </ToggleButton>
                    <ToggleButton fillWidth horizontal="start" size="l">
                        Products
                    </ToggleButton>
                    <ToggleButton fillWidth horizontal="start" size="l">
                        About
                    </ToggleButton>
                    <ToggleButton fillWidth horizontal="start" size="l">
                        Contact
                    </ToggleButton>
                </Column>
            )}
        </Row>
    )
}