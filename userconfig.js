const CONFIG = new Config({
  crypto: {
    coin: 'XMR',
    currency: 'EUR',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Leiria',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      s: ['https://www.startpage.com/sp/search?query=', 'Startpage'],
      b: ['https://www.base-search.net/Search/Results?lookfor=', 'Base'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    //"t": 'todo-list',
    "s": 'search-bar',
    "Numrow": 'tabs-list'
  },
  disabled: ['todo-list'],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'Myself',
      background_url: 'src/img/banners/bg-5.webp',
      categories: [
      {
        name: 'Email',
        links: [
          {
            url: 'https://app.tuta.com/mail/',
            name: 'Tuta',
            icon: 'mail'
          },
          {
            url: 'https://app.simplelogin.io/dashboard/',
            name: 'Alias',
            icon: 'switch'
          }
        ]
      },
      {
        name: 'Content',
        links: [
          {
            name: 'Invidious',
            url: 'https://invidious.lunar.icu/',
            icon: 'player-play'
          },
          {
            name: 'Omnivore',
            url: 'https://omnivore.app/home/',
            icon: 'bookmark'
          },
          {
            name: 'BeatBump',
            url: 'https://beatbump.io/home/',
            icon: 'music'
          }
        ]
      },
      ]
    },
    {
      name: 'Via Sana',
      background_url: 'src/img/banners/bg-6.gif',
      categories: [
        {
          name: 'Research tools',
          links: [
            {
              url: 'https://researchrabbitapp.com/home/',
              name: 'Research Rabbit',
              icon: 'topology-star-3'
            }
          ]
        },
        {
          name: 'Practice',
          links: [
            {
              name: 'Awaken to meaning',
              url: 'https://awakentomeaning.com/'
            }
          ]
        },
        {
          name: 'Sharing',
          links: [
            {
              name: 'Website',
              url: 'https://www.lucasgaldino.com',
              icon: 'app-window'
            },
            {
              name: 'YT Channel',
              url: 'https://studio.youtube.com/channel/UC-AdTc7ALgrNg5uNKH8nweg',
              icon: 'video'
            }
            // Later, add instagram
          ]
        }
      ]
    },
    {
      name: 'Code',
      background_url: 'src/img/banners/bg-7.gif',
      categories: [
        {
          name: 'Learn',
          links: [
            {
              name: 'GitHub',
              url: 'https://github.com/',
              icon:'brand-github'
            },
            {
              name: 'The Odin Project',
              url: 'https://www.theodinproject.com/dashboard',
              icon: 'brand-javascript'
            },
            {
              name: 'R coder',
              url: 'https://r-coder.com/',
              icon: 'database'
            }
          ]
        },
        {
          name: 'Design',
          links: [
            {
              name: 'AI colors',
              url: 'https://aicolors.co/',
              icon: 'rainbow'
            },
            {
              name: 'Real Time Colors',
              url: 'https://www.realtimecolors.com/',
              icon: 'text-color'
            },
            {
              name: 'Stack Sorted',
              url: 'https://stacksorted.com/',
              icon: 'brush'
            },
            {
              name: 'Pictogrammers',
              url: 'https://pictogrammers.com/',
              icon: 'icons'
            }
          ]
        },
        {
          name: 'Docs',
          links: [
            {
              name: 'hugo',
              url: 'https://gohugo.io/',
              icon: 'brand-golang'
            },
            {
              name: 'Oh my zsh!',
              url: 'https://ohmyz.sh/',
              icon: 'percentage'
            },
            {
              name: 'Neovim',
              url: 'https://neovim.io/',
              icon: 'code'
            },
            {
              name: 'NvChad',
              url: 'https://nvchad.com/',
              icon: 'file-code'
            },
            {
              name: 'Neorg',
              url: 'https://github.com/nvim-neorg/neorg',
              icon: 'brain'
            },
            {
              name: 'Sass',
              url: 'https://sass-lang.com/guide/',
              icon: 'brand-sass'
            },
            {
              name: 'BEM',
              url: 'https://en.bem.info/methodology/',
              icon: 'box-model'
            }
          ]
        }
      ]
    }]
});
