'use client';

import { useState } from 'react';
import { Column, Row, Flex, ToggleButton, Logo, NavIcon } from "@once-ui-system/core";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <Column
            fillWidth
            vertical="center"
            horizontal="start"
            style={{ 
                maxWidth: '20rem',
                position: 'fixed',
                top: '2rem',
                left: '2.5rem',
                zIndex: '9',
            }}
        >
            <Flex
                paddingX="20"
                paddingY="8"
                background="surface"
                border="surface"
                radius="l"
                horizontal="between"
                vertical="center"
                fillWidth

            >
                <NavIcon
                    isActive={isActive}
                    onClick={handleClick}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isActive}
                    aria-controls="demo-nav"
                />
                <Logo wordmark={false} />
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
                    <ToggleButton fillWidth horizontal="end" size="l">
                        Home
                    </ToggleButton>
                    <ToggleButton fillWidth horizontal="end" size="l">
                        Products
                    </ToggleButton>
                    <ToggleButton fillWidth horizontal="end" size="l">
                        About
                    </ToggleButton>
                    <ToggleButton fillWidth horizontal="end" size="l">
                        Contact
                    </ToggleButton>
                </Column>
            )}
        </Column>
    )
}