# ngArtRadio 2.0 - An Angular web app



This is the frontend application for a newer version **ArtRadio** (for first version you can check [reactArtRadio V1](https://github.com/devraider/reactArtRadio-v1.0)).
It's an ad-free online radio player built with Angular. 
  
> [!note]
> This project using:
> - Java, Spring boot framework as backend – code could be found: [javaArtRadio - Springboot](https://github.com/devraider/javaArtRadio-v2.0)
>- Python, as crawler to collect songs from different radio stations – code could be found   [pyArtRadio - Python](https://github.com/devraider/pyArtRadio-v2.0)

## I.1. Presentation images

1. Home page

...

## I.2. Features

- **Stream Radio Stations**: Access multiple stations for uninterrupted listening.
- **Track History**: See a list of recently played songs from each station's playlist.
- **Song Replays**: Replay songs through YouTube using the embedded player, without any ads.
- **Responsive Design**: Works smoothly on both desktop and mobile.

## I.3. Technologies Used

- **Angular**: Frontend framework for building dynamic user interfaces.
- **TypeScript**: For type-safe code in Angular components.
- **RxJS**: Reactive programming with observables for efficient state management.
- **Bootstrap**: Styling framework.
- **PrimeNG**: UI components library for rich, responsive user interfaces.
- **YouTube Player API**: Integrates YouTube videos directly into the app for media streaming and control.

## I.4. Getting Started

### I.4.1. Prerequisites

- **Node.js** (v14+)
- **npm** (10.8+)
- **Angular CLI** (I would recommend to install it globally `npm install -g @angular/cli`)

> [!warning]
> You need to have [javaArtRadio](https://github.com/devraider/javaArtRadio-v2.0) and [pyArtRadio](https://github.com/devraider/pyArtRadio-v2.0) up and running before starting web application.
### I.4.2. Installation and Setup

1. **Clone the repository:**

```bash

   git clone https://github.com/devraider/ngArtRadio-v2.0.git

   cd ngArtRadio-v2.0

```
2. **Install dependencies**

```bash
    npm install
```

### I.4.3. Run the application
```bash
   npm start
```
