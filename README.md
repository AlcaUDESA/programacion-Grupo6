# programacion-Grupo6
Repositorio del grupo de programación de Agustín Lucas Alcaraz, Gabriel Carrión y Agustín Taylor...
					
          <img src=<% for(let i = 0; i < productos.length; i++){ %>
						<% if(idSelected == productos[i].id){ %>
							<%= productos[i].foto %>
					<%	} } %> alt="" class="product-detail-img">
					<% for(let i = 0; i < productos.length; i++){ %>
						<% if(idSelected == productos[i].id){ %>
							<p class="product-detail-description"> <%=productos[i].descripcion %></p>
							<% } } %>
