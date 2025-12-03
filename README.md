# NetVision Studio

## Network Automation & Monitoring System 

## Overview

This project is a full-featured **network automation and monitoring
platform** built with **Django**, designed to manage Cisco-based
topologies.\
It provides VLAN synchronization using VTP, interface tracking, syslog
listener integration, host discovery, and visual topology management.

------------------------------------------------------------------------

## ✨ Features

### 🔧 Device Management

-   Store network devices (Switch, Multilayer) with hostname, IP,
    credentials.
-   Auto-sync VLANs and interface states from real Cisco switches.
-   SSH-based communication using a custom `SSHClient`.

### 📡 VLAN Synchronization

-   Extracts VLANs from `show vlan brief`.
-   Automatically updates Django models (`Vlan`, `Vlan_IntAssignment`).
-   Resolves Access VLAN and Native VLAN for each interface.
-   Uses the switch with **pk=1** as the VTP Server.

### 🔌 Interface Tracking

-   Stores interfaces per device.
-   Tracks:
    -   Name (Fa0/1, Gig0/1, etc.)
    -   Link state (up/down)
    -   Mode (access / trunk)
-   Sync derived from Cisco command `show interfaces switchport`.

### 🧩 Topology Links

-   Automatically maps switch-to-switch topology.
-   Stores connections using:
    -   `TopologyLink.device_a`
    -   `TopologyLink.interface_a`
    -   `TopologyLink.device_b`
    -   `TopologyLink.interface_b`

### 🖥 Syslog Listener

-   Receives syslog messages from all devices.
-   Saves events to database:
    -   Timestamp
    -   Severity
    -   Device
    -   Raw message
-   Used to detect interface up/down events in real time.

### 🕵 Host Detection

-   Tracks connected hosts by MAC address.
-   Saves:
    -   IP address
    -   Connected interface
    -   First seen / last seen timestamps
-   Supports dynamic host presence monitoring.

### 📚 Configuration Change Logging

-   Every interface configuration change (mode or native VLAN) is
    logged.
-   Saved using `ConfLog` model.
-   Includes old/new values and timestamp.

### 🌐 Frontend / UI

-   Interface dashboard showing:
    -   Port status
    -   VLAN mode
    -   Current configuration
-   Visual topology builder.
-   Responsive design for desktop and mobile.

------------------------------------------------------------------------

## 🗄 Database Models (Resumen)

-   **Device**
-   **Interface**
-   **TopologyLink**
-   **Vlan**
-   **Vlan_IntAssignment**
-   **SyslogEvent**
-   **Host**
-   **ConfLog**

------------------------------------------------------------------------

## 🛠 Requirements

-   Python 3.10+
-   Django 5+
-   Netmiko (SSH)
-   Cisco switches configured for:
    -   VTP domain
    -   Syslog server pointing to Django server
    -   SSH access

------------------------------------------------------------------------

## 🚀 How to Run

1.  Clone repo\

2.  Configure `.env`\

3.  Run migrations\

4.  Start Django server\

5.  Connect switches to syslog + SSH\

6. Synchronize all devices:

    ``` bash
    python manage.py sync_ports
    ```

7.  Run Syslog:

    ``` bash
    python manage.py run_syslog
    ```

------------------------------------------------------------------------

## 📝 License

Free to use for educational and professional purposes.

------------------------------------------------------------------------

## 👨‍💻 Authors

**Iván Ramos de la Torre**\
Software Engineer - Backend Team

**Patricio Davila Assad**\
Software Engineer - Backend Team

**Juan Marco Gosselin Gamboa**\
Software Engineer - Backend Team

**Jorge Armando Montes Palacios**\
Software Engineer - Frontend Team

**Luis Alejandro Monraz Chavez**\
Software Engineer - Frontend Team

**Erick Mathew Garcia Sanchez**\
Software Engineer - Network Team

**Carlo Virgilio Buelna**\
Software Engineer - Network Team

**Angel Valencia Saavedra**\
Software Engineer - Network Team


