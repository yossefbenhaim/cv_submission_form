import { Controller, useForm } from "react-hook-form"
import LoginFormSchema, { LoginFormKeys } from "./loginFormSchema"
import { LoginForm } from './loginFormSchema'
import { zodResolver } from '@hookform/resolvers/zod';

import { Autocomplete, Button, Chip, Dialog, TextField } from '@mui/material';
import { useState } from "react";
import useStyles from "./loginFormStyles";

const SUBMIT = 'אישור'
const OPEN_LOGIN_FORM = 'פתח טופס'

const formData = {
	name: 'John Doe',
	email: 'john@example.com',
	message: 'Hello',
	cars: [
		{ id: '1', name: 'Toyota', kilometer: 10000, company: 'Toyota Company' },
		{ id: '2', name: 'Honda', kilometer: 8000, company: 'Honda Company' },
		{ id: '3', name: 'Ford', kilometer: 12000, company: 'Ford Company' },
		{ id: '4', name: 'Chevrolet', kilometer: 9000, company: 'Chevrolet Company' },
		{ id: '5', name: 'BMW', kilometer: 15000, company: 'BMW Company' },
		{ id: '6', name: 'Mercedes-Benz', kilometer: 11000, company: 'Mercedes-Benz Company' },
		{ id: '7', name: 'Audi', kilometer: 13000, company: 'Audi Company' },
		{ id: '8', name: 'Nissan', kilometer: 8500, company: 'Nissan Company' },
		{ id: '9', name: 'Hyundai', kilometer: 9500, company: 'Hyundai Company' },
		{ id: '10', name: 'Volkswagen', kilometer: 14000, company: 'Volkswagen Company' },
		{ id: '11', name: 'Mazda', kilometer: 10500, company: 'Mazda Company' },
		{ id: '12', name: 'Subaru', kilometer: 12500, company: 'Subaru Company' }
	],
	apartment: true
};

const FrequentlyUpdatedComponent = () => {
	const handleClick = (val) => {
	// do something with val
	}
	return (
	// the arrow function created each render 🔔
	<button onClick={(val1)=>handleClick(val1)}>
	First 
	</ button>
	<button onClick={(val2)=>handleClick(val2)}>
	Second 
	</ button>
	)
   }
   ➖
   
	קוד עם קיורינג:
   ➖
   const FrequentlyUpdatedComponent = () => {
	const handleClick = (val) => () => {
	// do something with val
	}
	return (
	// no arrow function in the render method 🔔
	<button onClick={handleClick(val1)}>
	First 
	</ button>
	<button onClick={handleClick(val2)}>
	Second 
	</ button>
	)
   }
   
const defaultValuesLoginForm = {
	[LoginFormKeys.NAME]: formData.name,
	[LoginFormKeys.EMAIL]: formData.email,
	[LoginFormKeys.MESSAGE]: formData.message,
	[LoginFormKeys.CARS]: formData.cars,
	[LoginFormKeys.APARTMENT]: formData.apartment,
}

const LoginFormDialog = () => {
	const { classes } = useStyles()
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
	const { handleSubmit, control, formState: { errors }, } = useForm<LoginForm>({
		defaultValues: (defaultValuesLoginForm),
		resolver: zodResolver(LoginFormSchema)
	});
	const before = performance.now();
	const expensiveArr = useMemo(
	 () => [...Array(1_000_000).keys()],
	 [/* any varb */],
	 );
	 const after = performance.now();
	 console.log(`execute time in milliseconds: ${after - before}`);
	const handleOpenLogin = () => {
		setIsDialogOpen(true)
	}
	const handleCloseLogin = () => {
		setIsDialogOpen(prev => !prev)
	}
	const onSubmit = (data: LoginForm) => {
		console.log(data);
	}

	return (
		<div className="">
			<Button onClick={handleOpenLogin}>
				openDialog
			</Button>
			<Dialog
				onClose={handleCloseLogin}
				open={isDialogOpen}
				className=""
			>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className=" bg-blue-300 p-3 flex flex-col justify-between h-[400px] w-[550px] items-center " >
						<div className="">
							<Controller
								name={LoginFormKeys.NAME}
								control={control}
								render={({ field }) => (
									<TextField
										variant="outlined"
										id="name"
										className="w-[500px]"
										required
										label="שם מלא"
										{...field}
									/>
								)}
							/>
						</div>
						<div className="">
							<Controller
								name={LoginFormKeys.EMAIL}
								control={control}
								render={({ field }) => (
									<TextField
										id="email"
										variant="outlined"
										className="w-[500px]"
										required
										label="אימייל"
										{...field}
									/>
								)}
							/>
						</div>
						<div className="">
							<Controller
								name={LoginFormKeys.MESSAGE}
								control={control}
								render={({ field }) => (
									<TextField
										id="message"
										variant="outlined"
										className="w-[500px]"
										required
										label="הודעה"
										{...field}
									/>
								)}
							/>
						</div>
						<div
						>
							<Controller
								name={LoginFormKeys.CARS}
								control={control}
								render={({ field: { value, onChange }, fieldState: { error } }) => (
									<Autocomplete
										multiple
										openOnFocus
										className=" w-[12px]! [&_.MuiAutocomplete-root]:bg-red-400 "
										options={formData.cars.map((car) => car)}
										value={value || []}
										onChange={(_, selectedCar) => {
											onChange(selectedCar)
										}}
										getOptionLabel={(option) => option.name}
										renderTags={(Value, getTagProps) =>
											Value.map((option, index) => (
												<Chip
													label={option.name}
													{...getTagProps({ index })}
												/>
											))
										}
										style={{ width: 500 }}
										renderInput={(params) => (
											<TextField className="w-[12px]"  {...params} label="בחירת סוג רכב" placeholder="Favorites" />
										)}
									/>
								)}

							/>
						</div>
						<div>
							<Button type="submit" >
								{SUBMIT}
							</Button>
						</div>
					</div>
				</form>
			</Dialog>
		</div>
	)
}

export default LoginFormDialog;