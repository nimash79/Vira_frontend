# Vira — Smart Alarm Control Dashboard

Vira is a React-based web application designed to provide a user-friendly interface for controlling and configuring a compatible alarm system. It organizes alarm controls, relay management, device settings, contact information, and security zone configuration into a single web interface.

The application uses React, Redux Toolkit, and a component-based architecture to provide interactive controls, multilingual support, and persistent local preferences. It can generate structured SMS commands for supported alarm operations, allowing users to send configuration changes through a compatible messaging application.

## Overview

Managing a security alarm system can involve multiple operations, including arming or disarming the system, configuring alarm zones, controlling relays, updating passwords, and managing contact numbers.

Vira brings these operations together in a centralized dashboard. Users can configure settings through interactive forms and controls, while the application generates the corresponding commands for communication with the alarm device.

The project is built with React and Vite and uses React Router for navigation, Redux Toolkit for state management, and i18next for internationalization.

## Key Features

### Alarm System Control

- Toggle the alarm device's lock and unlock state.
- Configure alarm-related settings through an interactive dashboard.
- Store the alarm's phone number and password locally.
- Generate SMS commands for supported device operations.
- Provide visual feedback for user actions and validation errors.

### Relay Management

- Select a relay from the available relay numbers.
- Configure relay on/off states.
- Generate commands for relay control.
- Maintain selected relay preferences locally.

### Device Configuration

The device settings interface provides controls for several alarm configuration options:

- **Time and date:** Prepare commands to update the alarm device's clock.
- **Alarm duration:** Configure the alarm period.
- **Alarm status:** Enable or disable the alarm.
- **System mode:** Select the desired system mode.
- **Testing:** Generate commands for supported alarm, siren, notification, and communication tests.
- **Double security:** Configure the related security option and its timing.
- **Password management:** Prepare commands for updating menu and SMS passwords.

The supported operations depend on the connected alarm device and its communication protocol.

### Zone Configuration

Vira includes a dedicated zone management screen for organizing and configuring alarm zone settings.

### Contact Management

The contacts interface provides a dedicated area for contact-related alarm settings and phone-number management.

### Internationalization

- Translation support using i18next and react-i18next.
- Browser language detection.
- Right-to-left layout support for languages such as Persian, Arabic, Hebrew, and Urdu.
- Language-aware interface configuration.

### Persistent Local Settings

The application uses browser local storage to preserve selected preferences, including the alarm phone number, alarm password, relay selection, and related control states.

These settings can remain available across browser sessions on the same browser and origin.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| Vite | Development server and production build |
| React Router | Client-side navigation |
| Redux Toolkit | Application state management |
| React Redux | Connecting components to application state |
| Axios | HTTP request support |
| i18next | Internationalization |
| react-i18next | React translation integration |
| i18next-browser-languagedetector | Language detection |
| Material UI | UI component support |
| Bootstrap | Layout and styling utilities |
| Tailwind CSS | Utility-first styling support |
| Framer Motion | UI animations |
| Chart.js | Data visualization support |
| Firebase | Firebase integration |
| react-toastify | User notifications |
| react-multi-date-picker | Date selection |
| Jalali Moment | Jalali calendar and date handling |
| Vite PWA Plugin | Progressive Web App support |

## Application Pages

The application uses the following primary routes:

| Route | Description |
|---|---|
| `/` | Main alarm controls and relay management |
| `/device` | Device configuration and testing |
| `/contacts` | Contact-related settings |
| `/zone` | Alarm zone configuration |

The pages share a common layout and use reusable components for buttons, dropdowns, inputs, icons, and notifications.

## How It Works

Vira separates the user interface, navigation, state management, and command-generation logic into reusable modules.

1. **Configure:** The user changes an alarm setting through the dashboard.
2. **Validate:** The application checks required inputs where validation is implemented.
3. **Generate a command:** Utility functions encode the selected operation and its parameters using the alarm protocol's command structure.
4. **Prepare an SMS:** The application opens the browser or device's SMS handler using a `sms:` URL containing the alarm phone number and encoded command.
5. **Send through the messaging application:** The user can review and send the prepared message using a compatible messaging application.
6. **Persist preferences:** Selected values are stored locally where implemented.

The current SMS-based workflow prepares commands for the messaging application. It does not, by itself, verify that the alarm device received or successfully executed a command.

## Project Structure

```text
Vira_frontend/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── icons/              # Custom SVG-based icons
│   │   └── shared/             # Reusable UI components
│   ├── layouts/
│   │   └── MainLayout.jsx      # Shared application layout
│   ├── pages/
│   │   ├── HomePage.jsx        # Alarm and relay controls
│   │   ├── DevicePage.jsx      # Device settings
│   │   ├── ContactsPage.jsx    # Contact management
│   │   └── ZonePage.jsx        # Zone configuration
│   ├── utils/
│   │   ├── helper.js           # Command and data utilities
│   │   ├── constants.js        # Protocol constants
│   │   └── toast.js            # Notification helpers
│   ├── App.jsx                 # Routing and application setup
│   └── ...
├── .env.example                # Example environment configuration
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The structure above summarizes the main application modules. Refer to the repository for the complete source tree.

## Getting Started

### Prerequisites

- Node.js compatible with the project's Vite dependencies.
- npm.
- A modern web browser.
- A compatible alarm device and messaging application for testing SMS-based operations.

### Installation

Clone the repository:

```bash
git clone https://github.com/nimash79/Vira_frontend.git
cd Vira_frontend
```

Install dependencies:

```bash
npm install
```

### Environment Configuration

The repository includes an `.env.example` file with a `VITE_API_URL` variable.

If your deployment uses an HTTP API, create a local `.env` file and configure the appropriate URL:

```dotenv
VITE_API_URL=http://localhost:8080
```

Replace the example URL with the actual service address if an API is required by the functionality you intend to use.

Vite exposes variables prefixed with `VITE_` to client-side code. Do not store passwords, private API keys, or other secrets in these variables.

### Start the Development Server

```bash
npm run dev
```

Vite will start the development server and print the local address in the terminal.

Open that address in your browser to use the application.

### Build for Production

```bash
npm run build
```

The generated production files are placed in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

### Deployment

The application can be deployed to a static hosting provider that supports Vite production builds.

For example, the project includes a PM2-based serving workflow:

```bash
npm run serve
```

This script uses PM2 and a static server to serve the contents of `dist/`. Ensure PM2 and the required static-serving package are available in the deployment environment.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run serve` | Start the static production server through PM2 |
| `npm run unserve` | Stop and remove the PM2 process named `vira` |

## SMS Communication

The application constructs SMS URLs using the `sms:` scheme and places encoded alarm commands in the message body.

For example, a generated URL follows this general pattern:

```text
sms:<alarm-phone-number>?body=<encoded-command>
```

The exact command format is determined by the application's opcode constants and command-generation utilities.

**Important:** SMS URL handling varies by browser, operating system, and device. A compatible messaging application may be required, and sending the message may require user confirmation. The web application does not automatically guarantee delivery or execution of a command.

## Security Considerations

- The alarm password and phone number are stored in browser local storage by the current implementation.
- Avoid using shared or untrusted browsers for sensitive alarm configuration.
- Treat generated SMS commands as sensitive because they may contain device control parameters.
- Validate command parameters and authorization at the device or service level.
- Never assume that a UI state change means the physical alarm device has successfully changed state.
- Do not include private credentials in public environment files or client-side bundles.

## Potential Improvements

Possible future enhancements include:

- Adding automated tests for command generation and opcode handling.
- Introducing explicit delivery and execution status where the hardware protocol supports it.
- Improving validation for phone numbers and password inputs.
- Adding clearer feedback for unsupported SMS handlers.
- Documenting the alarm protocol and supported device models.
- Improving accessibility and mobile-browser compatibility.
- Expanding error handling for device communication failures.

## License

Check the repository for a license file before redistributing or modifying the project under specific license terms.

## Author

**Nima Sharifinia**

- GitHub: [@nimash79](https://github.com/nimash79)
- Repository: [Vira_frontend](https://github.com/nimash79/Vira_frontend)

---

*Vira provides a web-based interface for managing alarm settings and generating commands for a compatible security alarm system.*
