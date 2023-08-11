import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(200),
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={`${classes.inner} ${"animate__animated animate__fadeInUp"}`}>
        <h1 className={classes.title}>
          Hi!{' '}
          <br></br>
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
           My name is Francisco
          </Text>{' '}
           I'm a software engineer student at 42 Lisboa
        </h1>
        <Group className={classes.controls}>
          <Button
            component="a"
            href="projects/myProjects"
            size="xl"
            className={`${classes.control}  ${"animate__animated animate__fadeInUp"}`}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Check out my projects
          </Button>

          <Button
            component="a"
            href="https://github.com/Francisco-Zeferino"
            size="xl"
            variant="default"
            className={`${classes.control}  ${"animate__animated animate__fadeInUp"}`}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default HeroTitle;