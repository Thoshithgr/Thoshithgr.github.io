const output = document.getElementById('output');
const input = document.getElementById('cmdInput');
const termBody = document.getElementById('termBody');
const chipRow = document.getElementById('chipRow');

function scrollToBottom() {
  termBody.scrollTop = termBody.scrollHeight;
}

function print(html) {
  output.innerHTML += html + '\n';
  scrollToBottom();
}

function printLine(delayMs) {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

async function bootSequence() {
  const lines = [
    ['Booting thoshith-os v4.1.0 ...', 'dim'],
    ['[ <span class="cyan">OK</span> ] mounting /home/thoshith', 'dim'],
    ['[ <span class="cyan">OK</span> ] starting kubelet &mdash; cluster: production (Tricog Health)', 'dim'],
    ['[ <span class="cyan">OK</span> ] prometheus targets: 12 up, 0 down', 'dim'],
    ['[ <span class="cyan">OK</span> ] grafana dashboards loaded', 'dim'],
    ['[ <span class="cyan">OK</span> ] incident queue: 0 open, MTTA nominal', 'dim'],
    ['[ <span class="cyan">OK</span> ] loading resume.pdf, experience.log, projects/', 'dim'],
  ];
  for (const [text] of lines) {
    print(`<span class="dim">${text}</span>`);
    await printLine(140);
  }
  print('');
  print('<span class="bold">Welcome to thoshith@sre</span> — an interactive portfolio.');
  print('<span class="dim">Type</span> <span class="amber">help</span> <span class="dim">to see available commands, or tap one below.</span>');
  print('');
}

const GITHUB = 'https://github.com/Thoshithgr';
const LINKEDIN = 'https://linkedin.com/in/thoshithgr18';
const EMAIL = 'thoshithgr@gmail.com';

const commands = {
  help() {
    return [
      '<span class="amber">Available commands:</span>',
      '  <span class="cyan">about</span>        who I am',
      '  <span class="cyan">experience</span>   career history',
      '  <span class="cyan">projects</span>      things I\'ve built',
      '  <span class="cyan">skills</span>        tech stack',
      '  <span class="cyan">education</span>    academic background',
      '  <span class="cyan">resume</span>        open/download resume PDF',
      '  <span class="cyan">contact</span>       how to reach me',
      '  <span class="cyan">ls</span>            list sections like a filesystem',
      '  <span class="cyan">whoami</span>        one-line identity',
      '  <span class="cyan">clear</span>         clear the screen',
    ].join('\n');
  },

  about() {
    return [
      '<span class="amber">about.txt</span>',
      '',
      'I started in traditional IT operations — Windows Server, Active',
      'Directory, VMware, networking — and self-taught my way into cloud',
      'and Kubernetes while still holding down that job. That move became',
      'a promotion: I now work as an SRE, owning incidents end-to-end,',
      'running Kubernetes clusters in production, and building the',
      'observability stack that tells us something\'s wrong before a',
      'customer does.',
      '',
      'The traditional-infra background is a differentiator, not baggage —',
      'I understand what\'s underneath the abstractions most cloud-native-',
      'only engineers never touch: DNS, DHCP, AD, and how networks fail',
      'in the real world.',
      '',
      '<span class="dim">4+ years at Tricog Health · 2 roles, one internal promotion · 8 personal projects shipped</span>',
    ].join('\n');
  },

  whoami() {
    return '<span class="cyan">thoshith</span> &mdash; Site Reliability Engineer (L1/L2), Bengaluru, India. Open to work.';
  },

  experience() {
    return [
      '<span class="amber">experience.log</span>',
      '',
      '<span class="bold cyan">SRE Engineer (L1/L2)</span>                         <span class="dim">Oct 2025 — Present</span>',
      'Tricog Health Services · Bengaluru, India',
      '  → Monitor production systems, respond to incidents, keep uptime high',
      '  → Manage/troubleshoot Kubernetes clusters — pods, deployments, scaling',
      '  → Build &amp; maintain observability (Grafana, Prometheus) for proactive alerting',
      '  → Operate AWS (EC2, S3, RDS, CloudWatch, IAM), support CI/CD pipelines',
      '  → Run incident postmortems, automate away recurring toil',
      '',
      '<span class="bold cyan">System Administrator</span>                         <span class="dim">Sep 2022 — Sep 2025</span>',
      'Tricog Health Services · Bengaluru, India',
      '  → Managed Windows Server, Active Directory, DNS, DHCP, GPO',
      '  → Administered VMware ESXi/Workstation, networking (VPN, firewall)',
      '  → Self-taught AWS, Azure, Docker, Kubernetes, Git — the on-ramp to SRE',
    ].join('\n');
  },

  projects() {
    return [
      '<span class="amber">projects/</span>  <span class="dim">— personal builds, real repos</span>',
      '',
      '<span class="bold cyan">wordpress-grafana-monitoring</span>',
      '  Dockerized WordPress instrumented end-to-end with Prometheus + Grafana.',
      '  <span class="dim">[Docker Compose, Prometheus, Grafana, WordPress]</span>',
      `  <a href="${GITHUB}/wordpress-grafana-monitoring" target="_blank" rel="noopener">${GITHUB}/wordpress-grafana-monitoring</a>`,
      '',
      '<span class="bold cyan">DailyOps+</span>',
      '  My own DevOps command center — Grafana/Alertmanager alerts, Jira tasks,',
      '  Slack EOD reports, plus a Pomodoro focus mode with productivity analytics.',
      '  <span class="dim">[React, Supabase, Vercel]</span>',
      `  <a href="https://daily-task-dashboard-local.vercel.app" target="_blank" rel="noopener">live demo →</a>  ·  <a href="${GITHUB}/Daily-task-dashboard" target="_blank" rel="noopener">source →</a>`,
      '',
      '<span class="bold cyan">FitTrack Pro</span>',
      '  Installable fitness tracker for personal trainers — React SPA synced via',
      '  Firebase Realtime DB, shipped as a PWA and Android APK via Capacitor.',
      '  <span class="dim">[React, Firebase, Capacitor, PWA]</span>',
      `  <a href="${GITHUB}/fittrack-pwa" target="_blank" rel="noopener">${GITHUB}/fittrack-pwa</a>`,
      '',
      '<span class="bold cyan">TG Labs Toolkit</span>',
      '  Published npm CLI that scaffolds a production-ready monorepo (Fastify +',
      '  Next.js + Prisma + Postgres), plus custom Claude Code slash commands.',
      '  <span class="dim">[Node.js, npm, CLI, DX tooling]</span>',
      `  <a href="${GITHUB}/tglabs-toolkit" target="_blank" rel="noopener">${GITHUB}/tglabs-toolkit</a>`,
    ].join('\n');
  },

  skills() {
    return [
      '<span class="amber">skills.json</span>',
      '',
      '<span class="cyan">cloud_and_infra</span>       AWS (EC2, S3, RDS, CloudWatch, IAM), Kubernetes, Docker, Terraform, Ansible',
      '<span class="cyan">observability_cicd</span>   Grafana, Prometheus, CI/CD pipelines, incident response, postmortems',
      '<span class="cyan">prior_it_foundation</span>  Windows Server, Active Directory, Azure AD, VMware ESXi, networking',
      '<span class="cyan">tools</span>                Git &amp; GitHub, Nginx, Helm',
    ].join('\n');
  },

  education() {
    return [
      '<span class="amber">education</span>',
      '',
      '<span class="bold">B.Sc, Mathematics</span>  <span class="dim">2018 — 2021</span>',
      'Shree Siddaganga College',
    ].join('\n');
  },

  resume() {
    window.open('assets/Thoshith_GR_Resume.pdf', '_blank');
    return '<span class="dim">Opening</span> <span class="cyan">resume.pdf</span><span class="dim">... if it didn\'t open, </span><a href="assets/Thoshith_GR_Resume.pdf" target="_blank">click here</a>.';
  },

  contact() {
    return [
      '<span class="amber">contact.sh</span>',
      '',
      `email     <a href="mailto:${EMAIL}">${EMAIL}</a>`,
      `linkedin  <a href="${LINKEDIN}" target="_blank" rel="noopener">linkedin.com/in/thoshithgr18</a>`,
      `github    <a href="${GITHUB}" target="_blank" rel="noopener">github.com/Thoshithgr</a>`,
      '',
      '<span class="dim">Open to SRE / DevOps roles — on-site, hybrid, remote, or abroad.</span>',
    ].join('\n');
  },

  ls() {
    return [
      'about.txt      experience.log     projects/',
      'skills.json    education          contact.sh',
      'resume.pdf',
    ].join('\n');
  },

  cat(arg) {
    const map = {
      'about.txt': 'about',
      'experience.log': 'experience',
      'skills.json': 'skills',
      'contact.sh': 'contact',
      'resume.pdf': 'resume',
      'education': 'education',
    };
    if (arg && map[arg]) return commands[map[arg]]();
    return `<span class="red">cat: ${arg || ''}: No such file. Try 'ls'.</span>`;
  },

  'sudo'(arg) {
    if (arg === 'hire-me') {
      return [
        '<span class="cyan">[sudo] password for thoshith:</span> ********',
        '<span class="dim">Permission granted.</span>',
        '',
        'Redirecting to <span class="amber">contact</span>...',
        '',
        commands.contact(),
      ].join('\n');
    }
    return `<span class="red">Nice try. This incident has been logged.</span>`;
  },

  clear() {
    output.innerHTML = '';
    return null;
  },
};

const aliases = { hi: 'about', bio: 'about', work: 'experience', jobs: 'experience', repos: 'projects', cv: 'resume' };

function runCommand(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;
  const parts = trimmed.split(/\s+/);
  let cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(' ');

  print(`<span class="prompt-echo">thoshith@sre:~$ <span class="echoed-cmd">${escapeHtml(trimmed)}</span></span>`);

  if (aliases[cmd]) cmd = aliases[cmd];

  if (cmd === 'clear') {
    commands.clear();
    return;
  }

  if (commands[cmd]) {
    const result = commands[cmd](arg);
    if (result) print(result);
  } else {
    print(`<span class="red">command not found: ${escapeHtml(cmd)}</span>  <span class="dim">— type 'help' for a list</span>`);
  }
  print('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Input handling with history
const cmdHistory = [];
let historyIdx = -1;

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const val = input.value;
    if (val.trim()) {
      cmdHistory.push(val);
      historyIdx = cmdHistory.length;
    }
    runCommand(val);
    input.value = '';
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIdx > 0) {
      historyIdx--;
      input.value = cmdHistory[historyIdx] || '';
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIdx < cmdHistory.length - 1) {
      historyIdx++;
      input.value = cmdHistory[historyIdx] || '';
    } else {
      historyIdx = cmdHistory.length;
      input.value = '';
    }
  }
});

chipRow.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-cmd]');
  if (!btn) return;
  runCommand(btn.dataset.cmd);
  input.focus();
});

document.addEventListener('click', () => input.focus());

bootSequence().then(() => input.focus());
