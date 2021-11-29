FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src
COPY ["Test_game1/Test_game1.csproj", "Test_game1/"]
RUN dotnet restore "Test_game1/Test_game1.csproj"
COPY . .
WORKDIR "/src/Test_game1"
RUN dotnet build "Test_game1.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Test_game1.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Test_game1.dll"]
