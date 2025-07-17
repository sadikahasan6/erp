<script lang="ts">
	import Header from '../../components/header.svelte';
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	export let data;

	$: employees = data.employees;

	let selectedEmployee: (typeof employees)[0] | null = null;

	function handleRowClick(employee: any) {
		selectedEmployee = employee;
	}
</script>

<Header />

<div class="main">
	<div class="employee-info">
		<div style="padding: 25px;">
			<h1 class="text-primary">Employee Information</h1>
			<table class="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Employee Name</th>
						<th>Designation</th>
						<th>Department</th>
						<th>Section</th>
						<th>Joining Date</th>
						<th>Birth Date</th>
						<th>Info.</th>
						<th>Status</th>
					</tr>
				</thead>

				<tbody>
					{#each employees as employee}
						<tr style="cursor: pointer;" on:click={() => handleRowClick(employee)}>
							<td>{employee.id}</td>
							<td>{employee.name}</td>
							<td>HR manager</td>
							<td>Human Resource</td>
							<td>HR</td>
							<td>10-Jan-2025</td>
							<td>{employee.birthDate}</td>
							<td>10%</td>
							<td>Present</td>
						</tr>
					{:else}
						<tr>
							<td colspan="9">No employees found.</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="input">
			<h1 class="text-primary">Add Employee</h1>
			<form method="POST" use:enhance>
				<ul>
					<li>
						<label for="id">ID <span style="color:red">&nbsp; * &nbsp;</span>:</label>
						<input id="id" type="text" value={employees.length + 1} />
					</li>
					<li><label for="name">Name:</label> <input name="name" id="name" type="text" /></li>
					<li>
						<label for="designataion">Designation:</label> <input id="designataion" type="text" />
					</li>
					<li><label for="department">Department:</label> <input id="department" type="text" /></li>
					<li><label for="section">Section:</label> <input id="section" type="text" /></li>
					<!-- <li><label for="father">Father's name:</label> <input id="father" type="text" /></li>
				<li><label for="mother">Mother's name:</label> <input id="mother" type="text" /></li> -->
					<li>
						<label for="birth-date">Date of Birth:</label>
						<input name="birthDate" id="birth-date" type="date" />
					</li>
					<li><label for="Religion">Religion:</label> <input id="Religion" type="text" /></li>
					<li><label for="gender">Gender:</label> <input id="gender" type="text" /></li>
					<li><label for="nid">NID:</label> <input id="nid" type="text" /></li>
					<li><label for="brc">BRC No.:</label> <input name="brc" id="brc" type="text" /></li>
					<li><label for="payment">Account type: </label> <input id="payment" type="text" /></li>
					<li>
						<label for="Account-no:">Account No.:</label>
						<input name="account" id="Account-no:" type="text" />
					</li>
					<!-- <li><label for="present-address">Present Address:</label> <input id="present-address" type="text" /></li>
				<li><label for="permanent-address">Permanent Address:</label> <input id="permanent-address" type="text" /></li>
				<li><label for="religion">Religion:</label> <input id="religion" type="text" /></li>
				
				<li><label for="blood">Blood group:</label> <input id="blood" type="text" /></li>
				<li><label for="marital-status">Marital Status:</label> <input id="marital-status" type="text" /></li>
				 -->
				</ul>

				<div class="flex" style="gap: 20px;">
					<button type="submit" class="primary">Submit</button>
					<button class="secondary">Clear</button>
				</div>
			</form>
		</div>
	</div>
</div>

{#if selectedEmployee}
	<div class="modal-container">
		<div class="modal" style="position:relative; width: 700px">
			<button
				style="position: absolute; top:0; right: 0;"
				on:click={() => (selectedEmployee = null)}
				><Icon icon="iconamoon:close-duotone" width="24" height="24" /></button
			>
			<div
				class="flex"
				style="align-items: center; gap:20px; justify-content: space-between; padding-top:15px"
			>
				<div style="display:flex; flex-direction:column; gap:0px; margin-right:10px">
					<div class="text-primary" style="font-size: 35px;">{selectedEmployee.name}</div>
					HR Manager
				</div>
				<div class="flex" style="gap: 10px;">
					<button class="primary">Edit</button>
					<button class="secondary" on:click={() => goto(`?delete=${selectedEmployee!.id}`)}
						>Delete</button
					>
				</div>
			</div>
			<hr />

			<div class="flex" style="gap:20px">
				<img src="/demo.jpg" style="border:1px solid #eee; border-radius:5px;" alt="" width="100px" height="110px">
				<ul style="display:flex; flex-direction:column; gap:10px; list-style:none">
					<li class="flex"><span class="text-primary" style="width:120px;">Date of birth:</span> 15 July 2004</li>
					<li class="flex"><span class="text-primary" style="width:120px;">Contact No:</span> +88 01759-225437</li>
					<li class="flex"><span class="text-primary" style="width:120px;">Department:</span> Human Resource</li>
				</ul>
			</div>
		</div>
	</div>
{/if}
