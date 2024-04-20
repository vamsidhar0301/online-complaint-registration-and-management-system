
<h3>Hello {{user.name}} !!!</h3>

<br>
<br>

<table class="table table-bordered">
  <thead class="table-success">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Customer Contact</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {{#each complaints}}
        <tr>
            <td>{{_id}}</td>          
            <td>{{name}}</td>
            <td>{{contact}}</td>
            <td>{{desc}}</td>
        </tr>
    {{/each}}
    
  </tbody>
</table>

<div class="container mt-5 border p-5" style="width:70%">
    <h2> Assign the Complaint to Engineer</h2>
    <br>
    <form method="post" action="/assign">
    <div class="form-group">
        <label>Complaint Number</label>
        <input class="form-control" type="text" name="complaintID" placeholder="Complaint Number">
    </div>
    <div class="form-group">
        <label>Engineer</label>
        <select name="engineerName" id="engineerName" class="form-control">
            {{#each engineer}}
                <option value={{username}}> {{username}} </option>
            {{/each}}
        </select>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-success btn-block">Assign to Engineer</button>
    </div>
    </form>
</div>
