import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import 'animate.css';

  const personalProjectsMockdata = [
    {
      title: 'TrackingAI',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
      icon: IconUser,
    },
    {
        title: 'TrackingAI',
        description:
          'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        icon: IconUser,
      },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
      color:"white",
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      color:"white",
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
    cardColor: {
        backgroundColor: theme.colors.dark[5],
      },
  }));
  
  export function PersonalProjects() {
    const { classes, theme } = useStyles();
    const personalProjects = personalProjectsMockdata.map((personalProjects) => (
      <Card key={personalProjects.title} shadow="md" radius="md" className={`${classes.cardColor} ${classes.card} ${"animate__animated animate__fadeInUp"}`}
       padding="xl">
        <personalProjects.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {personalProjects.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {personalProjects.description}
        </Text>
      </Card>
    ));
  
    return (
      <>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} ta="center" mt="sm">
          My own personal projects
        </Title>
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {personalProjects}
        </SimpleGrid>
      </Container>
      </>
    );
  }
  
  export default PersonalProjects;