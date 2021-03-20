function clean_title(title) {
    return title.replace("#", "").replace(/\d/g, '').trim()
}

function generate_link(title) {
  return title.replace(/\W/g, '').toLowerCase();
}

function generate_docs() {
  var baseURL = "https://github.com"
  var playlist = [
    {
      commitId: "",
      title: [
        "#1 Docker WordPress Tutorial ",
        " Docker WordPress mysql phpmyadmin ",
        " Docker Wordpress Local Development",
      ],
      videoId: "lQo9L3bk1J4",
      url: "https://www.youtube.com/watch?v=lQo9L3bk1J4",
      duration: "21:27",
    },
    {
      commitId: "",
      title: [
        "#2 Docker Containers ",
        " mysql phpmyadmin ",
        " docker wordpress setup ",
        "",
      ],
      videoId: "tJb5HjUuQzE",
      url: "https://www.youtube.com/watch?v=tJb5HjUuQzE",
      duration: "13:42",
    },
    {
      commitId: "",
      title: [
        "#3 Setup Nextjs from scratch ",
        " next js wordpress graphql ",
        " next js wordpress theme",
      ],
      videoId: "OPEyP6EDUOk",
      url: "https://www.youtube.com/watch?v=OPEyP6EDUOk",
      duration: "14:13",
    },
    {
      commitId: "",
      title: [
        "#4 Add TailwindCSS to a NextJS Application ",
        " Next.js - Configure Tailwindcss and SASS PostCSS",
      ],
      videoId: "o6nuaf8zKvg",
      url: "https://www.youtube.com/watch?v=o6nuaf8zKvg",
      duration: "13:31",
    },
    {
      commitId: "",
      title: [
        "#5 Setup Apollo GraphQL Next js ",
        "  Apollo GraphQL Tutorial ",
        " Nextjs Apollo Client ",
        " WordPress",
      ],
      videoId: "XRQqiGVyvj0",
      url: "https://www.youtube.com/watch?v=XRQqiGVyvj0",
      duration: "9:55",
    },
    {
      commitId: "",
      title: [
        "#6 Fetch Menus with GraphQL ",
        " Using Fragments ",
        " Next js WordPress Headless ",
        " wp-graphql",
      ],
      videoId: "QZA51PwSF7w",
      url: "https://www.youtube.com/watch?v=QZA51PwSF7w",
      duration: "13:21",
    },
    {
      commitId: "",
      title: [
        "#7  getStaticProps Nextjs ",
        " getstaticpaths next js ",
        " getstaticprops vs getinitialprops ",
        " not working",
      ],
      videoId: "Tnghi0bglT4",
      url: "https://www.youtube.com/watch?v=Tnghi0bglT4",
      duration: "8:03",
    },
    {
      commitId: "",
      title: [
        "#8 Display WordPress Menus in Next.js via GraphQL ",
        " next js wordpress headless ",
        " WPGraphQL",
      ],
      videoId: "lCGTj9y7I80",
      url: "https://www.youtube.com/watch?v=lCGTj9y7I80",
      duration: "18:32",
    },
    {
      commitId: "",
      title: [
        "#9 Incremental Static Regeneration Nextjs ",
        " Nextjs revalidate ",
        " SSR in nextjs",
      ],
      videoId: "1AytR6POwUA",
      url: "https://www.youtube.com/watch?v=1AytR6POwUA",
      duration: "13:31",
    },
    {
      commitId: "",
      title: [
        "#10 Next js navigation bar ",
        " Nextjs revalidate ",
        " next js tutorial ",
        " Next js WordPress graphql",
      ],
      videoId: "xfF3Tyf3zBc",
      url: "https://www.youtube.com/watch?v=xfF3Tyf3zBc",
      duration: "3:39",
    },
    {
      commitId: "",
      title: [
        "#11 Next.js Site title ",
        " Tagline ",
        " Logo ",
        " next js tutorial ",
        " next js wordpress graphql",
      ],
      videoId: "Mj9QjPUiIOI",
      url: "https://www.youtube.com/watch?v=Mj9QjPUiIOI",
      duration: "14:41",
    },
    {
      commitId: "",
      title: [
        "#12 How to add a favicon to a Next.js static site ",
        " next js favicon not working ",
        " Nextjs WordPress",
      ],
      videoId: "mqPp-WBMR-4",
      url: "https://www.youtube.com/watch?v=mqPp-WBMR-4",
      duration: "3:05",
    },
    {
      commitId: "",
      title: [
        "#13 Nextjs Widgets ",
        " Footer ",
        " Next js persistent layout ",
        " TailwindGrids ",
        " Nextjs WordPress GraphQL",
      ],
      videoId: "3nJ6PCxY1n8",
      url: "https://www.youtube.com/watch?v=3nJ6PCxY1n8",
      duration: "16:11",
    },
    {
      commitId: "",
      title: [
        "#14 Next.js Social Links with SVG ",
        " next svg ",
        " next js tutorial ",
        " next js wordpress graphql",
      ],
      videoId: "XIEqK2WWhcE",
      url: "https://www.youtube.com/watch?v=XIEqK2WWhcE",
      duration: "14:38",
    },
    {
      commitId: "",
      title: [
        "#15 Nextjs getStaticProps ",
        " getStaticPaths ",
        " fallback ",
        " revalidate ",
        " Generate dynamic routes",
      ],
      videoId: "eNcf-nNGR-w",
      url: "https://www.youtube.com/watch?v=eNcf-nNGR-w",
      duration: "26:23",
    },
    {
      commitId: "",
      title: [
        "WPGraphQL Yoast SEO Schema Next.js ",
        " Nextjs seo ",
        " next-seo opengraph ",
        " JSON-LD",
      ],
      videoId: "36CkwVOWJ68",
      url: "https://www.youtube.com/watch?v=36CkwVOWJ68",
      duration: "22:23",
    },
    {
      commitId: "",
      title: [
        "#17 Using Cypress with Next.js End to End testing ",
        " Nextjs and Cypress Example ",
        " Cypress IO Tutorial",
      ],
      videoId: "uWdr8MO1HEE",
      url: "https://www.youtube.com/watch?v=uWdr8MO1HEE",
      duration: "23:01",
    },
    {
      commitId: "",
      title: [
        "#18 Making a custom 404 page in Next.js ",
        " Redirect to 404 ",
        " trailingSlash + custom 404 ",
        " 503",
      ],
      videoId: "WLkHlJ7qTw0",
      url: "https://www.youtube.com/watch?v=WLkHlJ7qTw0",
      duration: "9:53",
    },
    {
      commitId: "",
      title: [
        "#19 Blocking Fallback for getStaticPaths in Next.js ",
        " Redirect to 404 ",
        " Return 404 status code",
      ],
      videoId: "6HTh9M0ohsw",
      url: "https://www.youtube.com/watch?v=6HTh9M0ohsw",
      duration: "11:34",
    },
    {
      commitId: "",
      title: [
        "#20 NextJS + Wordpress Preview ",
        " How to get real-time draft previews with WordPress and Next.js",
      ],
      videoId: "fKpyl5XvD34",
      url: "https://www.youtube.com/watch?v=fKpyl5XvD34",
      duration: "4:35",
    },
    {
      commitId: "",
      title: [
        "#21 Nextjs Authentication JWT ",
        " Set up wp-graphql-jwt-authentication for post Preview ",
        " WordPress",
      ],
      videoId: "9ZkFubM3jqY",
      url: "https://www.youtube.com/watch?v=9ZkFubM3jqY",
      duration: "5:58",
    },
    {
      commitId: "",
      title: [
        "#22 Advanced Features: Preview Mode ",
        " Live Preview with Next.js ",
        " Next js api set-cookie ",
        " API",
      ],
      videoId: "UaWSboXn0-8",
      url: "https://www.youtube.com/watch?v=UaWSboXn0-8",
      duration: "6:20",
    },
    {
      commitId: "",
      title: [
        "#23 Logging with JWT ",
        " Next.js Headless WordPress ",
        " Authentication ",
        " Next.js ",
        " Preview ",
        " Login",
      ],
      videoId: "kTvCMFjwMvE",
      url: "https://www.youtube.com/watch?v=kTvCMFjwMvE",
      duration: "17:14",
    },
    {
      commitId: "",
      title: [
        "#24 Post Preview ",
        " Next.js Headless WordPress ",
        " Authentication ",
        " Next.js WordPress Preview",
      ],
      videoId: "rZuKUaUyAVE",
      url: "https://www.youtube.com/watch?v=rZuKUaUyAVE",
      duration: "10:23",
    },
    {
      commitId: "",
      title: [
        "#25 Page Preview ",
        " Next.js Headless WordPress ",
        " Authentication ",
        " Headless WordPress + Next.js",
      ],
      videoId: "ryf21JEkvkI",
      url: "https://www.youtube.com/watch?v=ryf21JEkvkI",
      duration: "7:22",
    },
    {
      commitId: "",
      title: [
        "#26 Page Based Pagination ",
        " Cursor Based Pagination ",
        " WP GraphQL ",
        " Next.js Headless WordPress ",
        " Loadmore",
      ],
      videoId: "3wzwmuGwpxc",
      url: "https://www.youtube.com/watch?v=3wzwmuGwpxc",
      duration: "8:18",
    },
  ];

  let buff = "Lesson|Video|Duration|Commit\n"+
"------------ | -------------|-----|------\n";

  playlist.forEach(function add_row(video, index) {
    let title = clean_title(video.title[0])
    let link = generate_link(title);

    buff +=
      `[${title}](#${link})` +
      "|" +
      `[${video.videoId}](${video.url})` +
      "|" +
      `${video.duration}` +
      "|" +
      `[commitId](${baseURL}/commitId)` +
      "\n";
  })

  playlist.forEach(function add_section(video, index) {
    let title = clean_title(video.title[0])

    buff += `# ${title}\n\n`
  })

  console.log(buff)
}

generate_docs()