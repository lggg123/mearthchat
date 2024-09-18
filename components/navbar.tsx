// components/Navbar.tsx
import React from 'react';
import { Button, Group, Box, Title } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import styles from '../styles/navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <Box h={60} className={styles.navbar}>
      <Group className={styles.group}>
        <Title order={3}>Mearth</Title>
        <Group>
          <Button
            component="a"
            href="https://github.com/lggg123/mearthchat"
            target="_blank"
            rel="noopener noreferrer"
            color="dark"
            leftSection={<IconBrandGithub />}
          >
            Github
          </Button>
          <Button
            component="a"
            href="https://www.projectmoonhut.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </Button>
        </Group>
      </Group>
    </Box>
  );
};
