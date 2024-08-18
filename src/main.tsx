import { MantineProvider, createTheme } from "@mantine/core"
import "@mantine/core/styles.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

const theme = createTheme({
	cursorType: "pointer",
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MantineProvider
			defaultColorScheme="dark"
			theme={theme}
		>
			<App />
		</MantineProvider>
	</StrictMode>,
)
