/**TODO:
 * - Tilføje sweetalert til når man har submittet en ansøgning
 * - Tjek om der er fejl og hvis der er fejl hvis en sweetalert med at der er fejl
 * ellers hvis en med at ansøgning er sendt
 */

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
	inputDiscordTag: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	inputIrlAge: z.string().min(2, {
		message: 'Din alder skal minimum være 16.',
	}),
	inputLinkToRules: z.string().min(2, {
		message: 'Dette skal være et link',
	}),
	inputRoleplayPlatforms: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
});

export function WhitelistApplication() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			inputDiscordTag: '',
			inputIrlAge: '',
			inputLinkToRules: '',
			inputRoleplayPlatforms: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<section
			className="bg-gray-100 px-6 py-24 dark:bg-gray-900"
			id="whitelistapplication"
		>
			<div className="container mx-auto sm:px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 mt-0 text-4xl font-bold uppercase text-gray-800 dark:text-gray-100">
						Whitelist Ansøgning
					</h2>
					<h3 className="mb-16 text-base font-normal italic text-gray-600 dark:text-gray-300">
						Her kan du ansøge om visa
					</h3>
				</div>
				<div className="flex justify-center">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full max-w-lg space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
						>
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
								<FormField
									control={form.control}
									name="inputDiscordTag"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-gray-700 dark:text-gray-300">
												Dit Discord Tag
											</FormLabel>
											<FormControl>
												<Input
													placeholder="artemisdk"
													className="w-full rounded-md border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
													{...field}
												/>
											</FormControl>
											<FormDescription className="text-gray-500 dark:text-gray-400">
												Dit discord id.
											</FormDescription>
											<FormMessage className="text-red-500 dark:text-red-400" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="inputIrlAge"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-gray-700 dark:text-gray-300">
												Hvad er din fødselsdag
											</FormLabel>
											<FormControl>
												<Input
													placeholder="05/05/1999"
													className="w-full rounded-md border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
													{...field}
												/>
											</FormControl>
											<FormDescription className="text-gray-500 dark:text-gray-400">
												Din fulde fødselsdato
											</FormDescription>
											<FormMessage className="text-red-500 dark:text-red-400" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="inputLinkToRules"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-gray-700 dark:text-gray-300">
												Link til reglerne
											</FormLabel>
											<FormControl>
												<Input
													placeholder="https://www.example.com"
													className="w-full rounded-md border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
													{...field}
												/>
											</FormControl>
											<FormDescription className="text-gray-500 dark:text-gray-400">
												Link til hvor man kan læse
												reglerne
											</FormDescription>
											<FormMessage className="text-red-500 dark:text-red-400" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="inputRoleplayPlatforms"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-gray-700 dark:text-gray-300">
												Hvilken platform har du brugt
												til RP og hvor mange timer har
												du i det?
											</FormLabel>
											<FormControl>
												<Input
													placeholder="FiveM - 3000 Timer"
													className="w-full rounded-md border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
													{...field}
												/>
											</FormControl>
											<FormDescription className="text-gray-500 dark:text-gray-400">
												Liste over hvilke platforme du
												har brugt og hvor mange timer du
												har på de forskellige platformer
											</FormDescription>
											<FormMessage className="text-red-500 dark:text-red-400" />
										</FormItem>
									)}
								/>
							</div>
							<Button
								type="submit"
								className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
							>
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</section>
	);
}
