<script>
	import Header from '../../components/header.svelte';
	export let data;
	$: employees = data.employees;
	console.log('Employee data:', employees);
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
					{#each employees as employee (employee.id)}
						<tr>
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

					<!-- <tr>
						<td>01</td>
						<td>Ahnaf Mir</td>
						<td>HR manager</td>
						<td>Human Resource</td>
						<td>HR</td>
						<td>10-Jan-2025</td>
						<td>05-Nov-2002</td>
						<td>10%</td>
						<td>Present</td>
					</tr> -->
				</tbody>
			</table>
		</div>
		<div class="input">
			<h1 class="text-primary">Add Employee</h1>
			<ul>
				<li>
					<label for="id">ID <span style="color:red">&nbsp; * &nbsp;</span>:</label>
					<input id="id" type="text" />
				</li>
				<li><label for="name">Name:</label> <input id="name" type="text" /></li>
				<li>
					<label for="designataion">Designation:</label> <input id="designataion" type="text" />
				</li>
				<li><label for="department">Department:</label> <input id="department" type="text" /></li>
				<li><label for="section">Section:</label> <input id="section" type="text" /></li>
				<!-- <li><label for="father">Father's name:</label> <input id="father" type="text" /></li>
				<li><label for="mother">Mother's name:</label> <input id="mother" type="text" /></li> -->
				<li>
					<label for="birth-date">Date of Birth:</label> <input id="birth-date" type="date" />
				</li>
				<li><label for="Religion">Religion:</label> <input id="Religion" type="text" /></li>
				<li><label for="gender">Gender:</label> <input id="gender" type="text" /></li>
				<li><label for="nid">NID:</label> <input id="nid" type="text" /></li>
				<li><label for="brc">BRC No.:</label> <input id="brc" type="text" /></li>
				<li><label for="payment">Account type: </label> <input id="payment" type="text" /></li>
				<li>
					<label for="Account-no:">Account No.:</label> <input id="Account-no:" type="text" />
				</li>
				<!-- <li><label for="present-address">Present Address:</label> <input id="present-address" type="text" /></li>
				<li><label for="permanent-address">Permanent Address:</label> <input id="permanent-address" type="text" /></li>
				<li><label for="religion">Religion:</label> <input id="religion" type="text" /></li>
				
				<li><label for="blood">Blood group:</label> <input id="blood" type="text" /></li>
				<li><label for="marital-status">Marital Status:</label> <input id="marital-status" type="text" /></li>
				 -->
			</ul>
			<div class="flex" style="gap: 20px;">
				<button class="primary">Submit</button> <button class="secondary">Clear</button>
			</div>
		</div>
	</div>
</div>
